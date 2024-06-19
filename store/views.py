from django.shortcuts import render
from rest_framework import permissions, status
from rest_framework.views import APIView
from django.contrib.auth import get_user_model, login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from .serializers import UserRegistrationSerializer, UserLoginSerializer, UserSerializer
# Create this = from .validations import custom_validations
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from .models import CustomUser
class UserRegister(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        clean_data = request.data
        serializer = UserRegistrationSerializer(data=clean_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(clean_data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)

    def post(self, request):
        data = request.data
        #assert validate_email(data)
        #assert validate_password(data)
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.check_user(data)
            login(request,user)
            token, created = Token.objects.get_or_create(user=user)
            user_data = serializer.data
            user_data['token'] = token.key
            return Response(user_data, status=status.HTTP_200_OK)


class CheckLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (TokenAuthentication,)

    def post(self, request):
        if request.user.is_authenticated:
            serializer = UserSerializer(request.user)
            return Response({
                'isLoggedIn': True,
                'user': serializer.data
            }, status=status.HTTP_200_OK)
        else:
            return Response({'isLoggedIn': False}, status=status.HTTP_400_BAD_REQUEST)

class UserLogout(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)


class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)


class UserDetail(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)

    def get(self, request, id):
        try:
            user = CustomUser.objects.get(pk=id)
            serializer = UserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except CustomUser.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request, id):
        try:
            user = CustomUser.objects.get(pk=id)
        except CustomUser.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def index(request):
    return render(request, 'index.html')
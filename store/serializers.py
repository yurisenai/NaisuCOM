# serializers.py
from django.contrib.auth import authenticate
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from .models import CustomUser


class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

    def create(self, clean_data):
        user_obj = CustomUser.objects.create_user(username = clean_data['username'], email=clean_data['email'], password=clean_data['password'])
        return user_obj


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def check_user(self, clean_data):
        user = authenticate(username=clean_data['username'], password=clean_data['password'])
        if not user:
            raise ValidationError('Invalid Credentials')
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id','email', 'username')

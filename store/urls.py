from django.urls import path
from .views import index ,UserRegister, UserView,UserLogin, UserLogout , CheckLogin , UserDetail

urlpatterns = [
    path('', index, name='index'),
    path('register/', UserRegister.as_view(), name='register'),
    path('check-login/', CheckLogin.as_view(), name='check-login'),
    path('login/', UserLogin.as_view(), name='login'),
    path('logout/', UserLogout.as_view(), name='logout'),
    path('user/', UserView.as_view(), name='user'),
    path('users/<uuid:id>/', UserDetail.as_view(), name='user-detail'),
]
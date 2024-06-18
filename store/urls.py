from django.urls import path
from .views import index, register, login_view, UserView

urlpatterns = [
    path('', index, name='index'),
    path('register/', register, name='register'),
    path('login/', login_view, name='login'),
    path('user/', UserView.as_view(), name='user-info'),
]
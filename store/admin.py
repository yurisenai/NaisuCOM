from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser


class CustomUserAdmin(UserAdmin):
    model = CustomUser
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('date_of_birth', 'profile_picture', 'bio', 'followers_count', 'following_count', 'posts_count', 'user_type')}),
    )


admin.site.register(CustomUser, CustomUserAdmin)

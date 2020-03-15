from django.urls import path, include
from rest_framework import routers
from .views import TodoItemViewSet

router = routers.SimpleRouter()
router.register(r'todoItems', TodoItemViewSet)

urlpatterns = [
    path('v1', include(router.urls))
]
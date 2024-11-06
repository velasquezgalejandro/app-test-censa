# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import TareaViewSet

# router = DefaultRouter()
# router.register(r'tareas', TareaViewSet)

from django.urls import path
from . import views

urlpatterns = [
    # path('', include(router.urls))
    path('tareas/', views.tarea_list_create, name='tarea_list_create'),
    path('tareas/<pk>/', views.tarea_detail_update_delete , name='tarea_detail_update_delete')
]
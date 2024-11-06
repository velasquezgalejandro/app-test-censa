from django.db import models

# Create your models here.
class Tarea(models.Model): 
    titulo = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True)
    completado = models.BooleanField(default=False)
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.titulo)

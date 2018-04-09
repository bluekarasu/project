from django.contrib import admin
from .models import Post,Week_repo,Experiment,Blog,Work
# Register your models here.
admin.site.register(Post)
admin.site.register(Work)
admin.site.register(Blog)
admin.site.register(Week_repo)
admin.site.register(Experiment)

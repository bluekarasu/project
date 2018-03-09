from django.contrib import admin
from .models import Post,Week_repo,Experiment,Photo
# Register your models here.
admin.site.register(Post)
admin.site.register(Photo)
admin.site.register(Week_repo)
admin.site.register(Experiment)

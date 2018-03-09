from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^report/(?P<pk>\d+)/$', views.report_detail, name='report_detail'),
    url(r'^exp/(?P<pk>\d+)/$', views.exp_detail, name='exp_detail'),
    url(r'^post/(?P<pk>\d+)/$', views.post_detail, name='post_detail'),
]

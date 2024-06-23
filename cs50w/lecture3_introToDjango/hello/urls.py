from django.urls import path

from . import views 

urlpatterns = [
   path("", views.index, name='index'), 
   path("redolf", views.redolf, name='redolf'),
   path("<str:name>",views.greet, name="greet")
]











# when someone visits the "" url pattern, run index from views we are in the hello app so default "" is /hello
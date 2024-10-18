from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, MessageSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class ContactMessageView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'code': 200, 'message': 'Message sent successfully!'}, status=status.HTTP_200_OK)
        return Response({'code': 400, 'message': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)
pipeline {
  agent any

  environment {
    Docker
    DOCKER_REGISTRY = "docker.io"
    DOCKER_IMAGE = "10088989/my-node-app"
    DOCKER_TAG = "latest"
    DOCKER_USERNAME = credentials('timmyJenkey').username
    DOCKER_PASSWORD = credentials('timmyJenkey').password
  }

  stages {
    stage('Build') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
          sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD $DOCKER_REGISTRY"
          sh "docker build -t $DOCKER_REGISTRY/$DOCKER_IMAGE:$DOCKER_TAG ."
        }
      }
    }
    stage('Push') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
          sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD $DOCKER_REGISTRY"
          sh "docker push $DOCKER_REGISTRY/$DOCKER_IMAGE:$DOCKER_TAG"
        }
      }
    }
  }
}

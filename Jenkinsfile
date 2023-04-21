pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t <dockerhub-username>/<image-name>:<version> .'
            }
        }
        stage('Push') {
            steps {
                sh 'docker push <dockerhub-username>/<image-name>:<version>'
            }
        }
    }
}

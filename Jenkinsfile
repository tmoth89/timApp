pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('timmyJenkey')
	}

	stages {

		stage('Build') {

			steps {
				sh '/Applications/Docker.app/Contents/Resources/bin/docker build -t 10088989/my-node-app:latest .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh '/Applications/Docker.app/Contents/Resources/bin/docker docker push 10088989/my-node-app'
			}
		}
	}
}

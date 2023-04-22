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
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | /Applications/Docker.app/Contents/Resources/bin/docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {
			steps {
				sh '/Applications/Docker.app/Contents/Resources/bin/docker push 10088989/my-node-app'
			}
		}
	}

	post {
		always {
			echo "Push made to Timmy's App Repo!"
		}
		success {
			echo "Pipeline succeeded!"
		}
		failure {
			echo "Pipeline has failed!"
		}
	}

	triggers {
		bitbucketPush()
	}
}

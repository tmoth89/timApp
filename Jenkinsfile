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

		stage('Install kubectl') {
            steps {
                sh '''
                    curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
                    chmod +x ./kubectl
                    sudo mv ./kubectl /usr/local/bin/kubectl
                '''
            }
        }

		stage('Deploy to Kubernetes') {
             steps {
                // Clone the repository containing the Kubernetes manifests
                checkout([$class: 'GitSCM', branches: [[name: 'Main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'Repo', url: 'https://github.com/tmoth89/timmyk8s-manifests']]])
        
                // Deploy the updated Kubernetes manifests to the cluster
                sh 'kubectl apply -f webApp.yml'
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

}

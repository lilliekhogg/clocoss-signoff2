# clocoss-signoff2


Dependancies may need to be applied first if they are not already installed on your vm:

1. curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
3. sudo apt-get install git

# How to Use
1. git clone https://github.com/lilliekhogg/clocoss-signoff2.git
2. cd clocoss-signoff2
  - once you are in this folder, please install these dependancies to allow node to function
  - curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
  - sudo apt-get install -y nodejs
3. npm install
4. you can test that it works using : DBTYPE=inmemory npm start
  - it will be available on port 8080
5. Deploy the app thorough using gcloud deploy app, or run node app

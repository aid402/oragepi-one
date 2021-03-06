# How to configure NGROK Tunnel with Supervisor
* forward port to localhost for ssh, mqtt broker(mosquitto) and node-red
* First, make sure mosquitto and node-red have been installed correctly.
## 1.download the latest version of ngrok
https://ngrok.com/download

Choose Linux ARM
* extract file
* copy ngrok to /usr/local/bin/
* download and copy ngrok.yml to /etc/
* copy and paste your authtoken from ngrok dashboard to ngrok.yml

#### or copy and paste this code line by line:
login as root or run `sudo su`
```
apt-get install wget
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip
unzip ngrok-stable-linux-arm.zip
cp ngrok /usr/local/bin/
nano /etc/ngrok.yml
///copy script from ngrok.yml in this repository
///copy your authtoken from ngrok dashboard

```
## 2.set up supervisor
`apt-get install supervisor`

#### On to supervisor configuration. Create the configuration file as follows:
(or copy and paste into /etc/supervisor/supervisord.conf)
```
[program:ngrok]
command=/usr/local/bin/ngrok start --all --config=/etc/ngrok.yml
autostart=true
autorestart=true
stopsignal=QUIT
```
#### Then, set supervisor to autostart at boot.
```
systemctl enable supervisor
systemctl start supervisor
```
#### To check the status of supervisor controlled daemons, run.
`supervisorctl status`
#### Check the dashboard on the ngrok website to see URL.
https://ngrok.com

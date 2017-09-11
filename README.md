# How to set up ngrok service
## download the latest version of ngrok
https://ngrok.com/download
Choose Linux ARM
*extract file
*copy ngrok to /usr/local/bin/
*download and copy ngrok.yml to /etc/

## set up supervisor
*'apt-get install supervisor'

#### On to supervisor configuration (/etc/supervisord.conf). Create the configuration file as follows:
[program:ngrok]
command=/usr/local/bin/ngrok start --all --config=/etc/ngrok.yml
autostart=true
autorestart=true
stopsignal=QUIT

#### Then, set supervisor to autostart at boot.
*'systemctl enable supervisor'
*'systemctl start supervisor'

#### To check the status of supervisor controlled daemons, run.
*'supervisorctl status'
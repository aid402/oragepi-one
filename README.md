# How to set up ngrok service
## 1.download the latest version of ngrok
https://ngrok.com/download

Choose Linux ARM
* extract file
* copy ngrok to /usr/local/bin/
* download and copy ngrok.yml to /etc/
* copy and paste your authtoken from ngrok dashboard to ngrok.yml

## 2.set up supervisor
`apt-get install supervisor`

#### On to supervisor configuration. Create the configuration file as follows:
(or copy and paste in /etc/supervisord.conf)
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

# mpu9250
RTIMULib
* [ติดตั้ง RTIMULib](http://blog.robots.in.th/2017/07/rtimulib-mpu9250-raspberry-pi-3.html)
* ในขั้นตอนข้อที่ 3. ให้ใช้ git clone https://github.com/RTIMULib/RTIMULib2 แทน ซึ่งตัวนี้เป็นเวอร์ชั่นล่าสุด
* compile /Linux/RTIMULibDrive ให้เรียบร้อย
* ทดสอบใน command line ก่อนได้โดยพิมพ์คำสั่ง RTIMULibDrive (ยกเลิกโดยกด Ctrl+c)
* ศึกษาวิธีการใช้งานอย่างระเอียดตามลิงค์นี้ https://github.com/RTIMULib/RTIMULib2
* copy code ในไฟล์ mpu9250.js ไป import ใน node-red 
* OPi One จะมี i2c 2 ชุด(0 กับ 1) ใช้ชุดไหนก็ได้ โปรแกรม RTIMULibDrive จะสแกนหาและสร้างไฟล์ init อัตโนมัติ

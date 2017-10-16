def read_temp_raw(): #สร้างฟังก์ชั่น read_temp_raw()
  f = open(device_file, 'r') #เปิดไฟล์ที่เซ็ทชื่อไว้ในตัวแปล device_file เพื่อเอามาอ่าน ('r')
  lines = f.readlines() #อ่านไฟล์ที่ละบรรทัดมาเก็บไว้ในตัวแปล lines (Lists) โดยตัด '\n' ออก
  #ตัวอย่างค่า lines ที่อ่านมา ['(บรรทัดแรก)xxxxxxxxYES','(บรรทัดที่2)xxxxt=yyyyy']
  f.close() #ปิดไฟล์
return lines #return ค่าในตัวแปร lines

def read_temp(): #สร้างฟังก์ชั่น read_temp()
  lines = read_temp_raw() #เรียกฟังก์ชั่น read_temp_raw() นำค่าที่ return มาเก็บไว้ใน lines
  while lines[0].strip()[-3:] != 'YES':
    #สร้าง while loop
    #lines[0] คือค่าจาก lines ที่ index=0 ซึ่งก็คือ string ของบรรทัดแรก ('(บรรทัดแรก)xxxxxxxxYES')
    #.strip() ตัด char ช่องว่างทุกประเภททั้งหมดออกจาก string
    #[-3:] อ่านค่า string ที่ตัดช่องว่างออกแล้ว เฉพาะ 3 ตัวสุดท้าย
    #!= 'YES' ถ้า 3 ตัวสุดท้ายไม่เท่ากับ 'YES' ให้เข้า loop
    time.sleep(0.2) #หยุด 0.2 วินาที
    lines = read_temp_raw() #เรียกฟังก์ชั่น read_temp_raw() นำค่าที่ return มาเก็บไว้ใน lines แล้ววน loop
  #เมื่อ 3 ตัวสุดท้ายของบรรทัดแรก = 'YES' จะออกจาก loop แล้ว run คำสั่งถัดไป
  equals_pos = lines[1].find('t=')
  #lines[1] คือค่าจาก lines ที่ index=1 ซึ่งก็คือ string ของบรรทัดที่ 2 ('(บรรทัดที่2)xxxxt=yyyyy')
  #.find('t=') หา 't=' ตัวแรกใน lines[1] แล้วคืนค่า index มาเก็บไว้ใน equals_pos
  #กรณีที่ไม่มี 't=' ในบรรทัดที่ 2 จะคืนค่า -1
  if equals_pos != -1: #ถ้า equals_pos != -1 (ซึ่งหมายถึงถ้าในบรรทัดที่ 2 มี 't=')
    temp_string = lines[1][equals_pos+2:]
    #lines[1] ค่าในบรรทัดที่ 2
    #[equals_pos+2:] ค่า string นับจากตัวที่ 2 ถัดจาก 't=' ไปจนถึงตัวสุดท้าย
    #จากตัวอย่างค่า '(บรรทัดที่2)xxxxt=yyyyy' จะได้ temp_string = 'yyyyy'
    temp_c = float(temp_string) / 1000.0
    #float(temp_string) เปลี่ยนค่าใน temp_string ซึ่งเป็น string ให้เป็น float
return temp_c #คืนค่า temp_c

# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

import serial.tools.list_ports
import random
import time
import sys
from Adafruit_IO import MQTTClient

AIO_FEED_IDS = ["bbc-led", "bbc-temp", "door", "bbc-gas"]
# , "router", "computer"]
AIO_USERNAME = "hjilklong"
AIO_KEY = "aio_ZbXm45LILMmxcpivwARIInsM1MzZ"


def connected(client):
    print("Ket noi thanh cong ...")
    for feed in AIO_FEED_IDS:
        client.subscribe(feed)


def subscribe(client, userdata, mid, granted_qos):
    print("Subscribe thanh cong ...")


def disconnected(client):
    print("Ngat ket noi ...")
    sys.exit(1)


def message(client, feed_id, payload):
    print("Nhan du lieu: " + payload)
    if isMicrobitConnected:
        ser.write((str(payload) + "#").encode())


client = MQTTClient(AIO_USERNAME, AIO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()
client.loop_background()


def getPort():
    ports = serial.tools.list_ports.comports()
    N = len(ports)
    commPort = "None"
    for i in range(0, N):
        port = ports[i]
        strPort = str(port)
        if "COM6" in strPort:
            splitPort = strPort.split(" ")
            commPort = splitPort[0]
    return commPort


isMicrobitConnected = False
if getPort() != "None":
    ser = serial.Serial(port=getPort(), baudrate=115200)
    isMicrobitConnected = True

mess = ""


def processData(data):
    data = data.replace("!", "")
    data = data.replace("#", "")
    splitData = data.split(":")
    print(splitData)
    if splitData[1] == "TEMP":
        client.publish("bbc-temp", splitData[2])
    if splitData[1] == "GAS":
        client.publish("bbc-gas", splitData[2])
    if splitData[1] == "DOOR":
        client.publish("door", splitData[2])
    if splitData[1] == "LED":
        client.publish("bbc-led", splitData[2])
    # if splitData[1] == "COMPUTER":
    #     client.publish("computer", splitData[2])
    # if splitData[1] == "ROUTER":
    #     client.publish("router", splitData[2])


mess = ""


def readSerial():
    bytesToRead = ser.inWaiting()
    if bytesToRead > 0:
        global mess
        mess = mess + ser.read(bytesToRead).decode("UTF-8")
        while ("#" in mess) and ("!" in mess):
            start = mess.find("!")
            end = mess.find("#")
            processData(mess[start : end + 1])
            if end == len(mess):
                mess = ""
            else:
                mess = mess[end + 1 :]


while True:
    if isMicrobitConnected:
        readSerial()
    # value = random.randint(0, 100)
    # print("Cap nhat:", value)
    # client.publish("bbc-temp", value)
    time.sleep(1)

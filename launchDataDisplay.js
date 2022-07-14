//Launch data display
//class to set up data,
class InputData{
    constructor(
        time_seconds,
        latitude,
        logitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.logitude = logitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

//getData function to load data from the data file
function getData(){
    var loadedData = loadData();
    return loadedData;
}
//dataRow function to set up the data
function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units
    msg += "</td>";
    return msg;
}
//updateDisplay to tie it all together
function updateDisplay(){
    
    //record and display time data
    theTime = new Date();
    document.getElementById("clockTime").innerHTML = theTime.getHours() + ":" + theTime.getMinutes() + ":" + theTime.getSeconds();


    var timeRead = data[index].time_seconds;
    //update table...
    if(timeRead >= 10){
        document.getElementById("data").rows["seconds"].innerHTML =
            dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerHTML =
            dataRow("latitude", data[index].latitude, "");
        document.getElementById("data").rows["longitude"].innerHTML = 
            dataRow("Longitude", data[index].logitude, "");
        document.getElementById("data").rows["gps_altitude"].innerHTML = 
            dataRow("GPS_Altitude", data[index].gps_altitude, "");
        document.getElementById("data").rows["bmp_altitude"].innerHTML = 
            dataRow("BMP_Altitude", data[index].bmpSensor_altitude, "");
        document.getElementById("data").rows["bmp_pressure"].innerHTML = 
            dataRow("BMP_Pressure", data[index].bmpSensor_pressure, "");
        document.getElementById("data").rows["bmp_temperature"].innerHTML = 
            dataRow("BMP_Temperature", data[index].bmpSensor_temp, "");
        document.getElementById("data").rows["dig_temperature"].innerHTML = 
            dataRow("Dig_Temperature", data[index].digSensor_temp, "");
        document.getElementById("data").rows["css_temperature"].innerHTML = 
            dataRow("CSS_Temperature", data[index].cssSensor_temp, "");
        document.getElementById("data").rows["css_eCO2"].innerHTML = 
            dataRow("CSS_eCO2", data[index].cssSensor_eCO2, "");
        document.getElementById("data").rows["css_TVOC"].innerHTML = 
            dataRow("CSS_TVOC", data[index].cssSensor_TVOC, "");
        document.getElementById("data").rows["UV"].innerHTML = 
            dataRow("UV", data[index].UV, "");
        document.getElementById("data").rows["AccelX"].innerHTML = 
            dataRow("AccelX", data[index].accelX, "");
        document.getElementById("data").rows["AccelY"].innerHTML = 
            dataRow("AccelY", data[index].accelY, "");
        document.getElementById("data").rows["AccelZ"].innerHTML = 
            dataRow("AccelZ", data[index].accelZ, "");
        document.getElementById("data").rows["MagneticX"].innerHTML = 
            dataRow("MagneticX", data[index].magneticX, "");
        document.getElementById("data").rows["MagneticY"].innerHTML = 
            dataRow("MagneticY", data[index].magneticY, "");
        document.getElementById("data").rows["MagneticZ"].innerHTML = 
            dataRow("MagneticZ", data[index].magneticZ, "");
        document.getElementById("data").rows["GyroX"].innerHTML = 
            dataRow("GyroX", data[index].gyroX, "");
        document.getElementById("data").rows["GyroY"].innerHTML = 
            dataRow("GyroY", data[index].gyroY, "");
        document.getElementById("data").rows["GyroZ"].innerHTML = 
            dataRow("GyroZ", data[index].gyroZ, "");
    }

    if(index < 500){
        index++;
    } else {
        index = 0;
    }
}
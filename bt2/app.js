const devices = [];

const validateDevice = (newDev) => {
    if (newDev.name === undefined || newDev.name === "") {
        return false;
    }

    if (newDev.roomName === undefined || newDev.roomName === "") {
        return false;
    }

    if (newDev.powerWatts === undefined || newDev.powerWatts <= 0) {
        return false;
    }

    return true;
};

const createDevice = (list, newDev) => {
    if (!validateDevice(newDev)) {
        return false;
    }

    const newId = "DEV_" + (list.length + 1);

    const device = {
        id: newId,
        name: newDev.name,
        roomName: newDev.roomName,
        powerWatts: newDev.powerWatts,
        isActive: newDev.isActive
    };

    list.push(device);

    return device;
};

const readDevicesByRoom = (list, roomName) => {
    const result = [];

    for (let i = 0; i < list.length; i++) {
        if (list[i].roomName === roomName) {
        result.push(list[i]);
        }
    }

    return result;
};

const updateDevice = (list, id, updateData) => {
  let targetDevice = null;
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
        targetDevice = list[i];
        break;
        }
    }

    if (targetDevice === null) {
        return false;
    }

    if (updateData.name !== undefined) {
        targetDevice.name = updateData.name;
    }

    if (updateData.roomName !== undefined) {
        targetDevice.roomName = updateData.roomName;
    }

    if (updateData.powerWatts !== undefined) {
        targetDevice.powerWatts = updateData.powerWatts;
    }

    if (updateData.isActive !== undefined) {
        targetDevice.isActive = updateData.isActive;
    }

    return true;
};

const deleteDevice = (list, id) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
        list.splice(i, 1);
        return true;
        }
    }

    return false;
};

console.log("===== CREATE =====");

const device1 = createDevice(devices, {
    name: "Điều hòa",
    roomName: "Phòng khách",
    powerWatts: 1500,
    isActive: true
});

const device2 = createDevice(devices, {
    name: "Đèn ngủ",
    roomName: "Phòng ngủ",
    powerWatts: 20,
    isActive: true
});

const device3 = createDevice(devices, {
    name: "Tivi",
    roomName: "Phòng khách",
    powerWatts: 100,
    isActive: false
});

console.log(device1);
console.log(device2);
console.log(device3);

console.log("\n===== READ PHÒNG KHÁCH =====");
const livingRoomDevices = readDevicesByRoom(devices, "Phòng khách");

console.log(livingRoomDevices);

console.log("\n===== UPDATE =====");
const updateResult1 = updateDevice(devices, "DEV_1", {isActive: false});

console.log("Kết quả cập nhật điều hòa:", updateResult1);

const updateResult2 = updateDevice(devices, "DEV_2",{powerWatts: 0});

console.log("Kết quả cập nhật đèn ngủ:", updateResult2);

console.log("\n===== DANH SÁCH SAU UPDATE =====");
for (let i = 0; i < devices.length; i++) {
    console.log(devices[i]);
}

console.log("\n===== DELETE =====");

const deleteResult = deleteDevice(devices, "DEV_3");

console.log("Kết quả xóa DEV_3:", deleteResult);

const deleteResult2 = deleteDevice(devices, "DEV_999");

console.log("Kết quả xóa DEV_999:", deleteResult2);

console.log("\n===== DANH SÁCH THIẾT BỊ CUỐI CÙNG =====");
for (let i = 0; i < devices.length; i++) {
    console.log(devices[i]);
}
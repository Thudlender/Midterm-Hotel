class Person {
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = null;
  constructor(name, address, email, phone, accountType) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
  }

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }

  getPhone() {
    return this.phone;
  }

  getAccountType() {
    return this.accountType;
  }

  setAccountType() {
    this.accountType = accountType;
  }

  toString() {
    return (
      "Person[name = " +
      this.name +
      ", address = " +
      this.address +
      ", email = " +
      this.email +
      ", phone = " +
      this.phone +
      "]"
    );
  }
}

class Account extends Person {
    username = "";
    password = "";
    status = AccountStatus;
    constructor(username, password, status) {
        this.username = username;
        this.password = password;
        this.status = status;
    }

    login(username, password) {
        this.username = username;
        this.password = password;
        return this.login;
    }

    resetPassword(username, newPassword) {
        this.username = username;
        this.newPassword = newPassword;
    }
}

class Receptionist {
    createBooking() {
        return new RoomBooking();
    }
}

class Guest extends Person {
    total = 0;
    constructor(total) {
        this.total = total;
    }

    createBooking() {
        return new RoomBooking();
    }
}

class RoomBooking extends Person {
  reservationNumber = "";
  startDate = "";
  durationDays = 0;
  status = BookingStatus;
  createBy = Person;
  constructor(reservationNumber, startDate, durationDays, status, createBy) {
    this.reservationNumber = reservationNumber;
    this.startDate = startDate;
    this.durationDays = durationDays;
    this.status = status;
    this.createBy = createBy;
  }

  getDetail(reservationNumber) {
    this.reservationNumber = reservationNumber;
    return this.RoomBooking;
  }

  createBooking(reservationNumber, startDate, durationDays, guest) {
    this.reservationNumber = reservationNumber;
    this.startDate = startDate;
    this.durationDays = durationDays;
    this.guest = guest;
    return new RoomBooking();
  }
}

class Notification extends Person {
    notificationId = 0;
    createOn = "";
    content = "";
    sender = Person;
    recipient = Person;
    constructor(notificationId, createOn, content, sender, recipient) {
        this.notificationId = notificationId;
        this.createOn = createOn;
        this.content = content;
        this.sender = Person;
        this.recipient = Person;
    }

    send(sender, recipient, content) {
        this.sender = sender;
        this.recipient = recipient;
        this.content = content;
        return true;
    }
}

class Room {
    roomNumber = "";
    style = Roomstyle;
    status = RoomStatus;
    roomPrice = double;
    constructor(roomNumber, style, status, roomPrice) {
        this.roomNumber = roomNumber;
        this.style = style;
        this.status = status;
        this.roomPrice = roomPrice;
    }

    isRoomAvailable(roomNumber) {
        this.roomNumber = roomNumber
        return this.isRoomAvailable;
    }

    createRoom(roomNumber, style, status, price) {
        this.roomNumber = roomNumber;
        this.style = style;
        this.status = status;
        this.price = price;
        
    }
}

class Hotel {
    name = "";
    location = "";
    constructor(name, location) {
        this.name = name;
        this.location = location   
    }

    getRooms() {
        return this.Rooms;
    }

    addnewRooms(room) {
        this.rooms.push(room);
        return this.room;
    }
}
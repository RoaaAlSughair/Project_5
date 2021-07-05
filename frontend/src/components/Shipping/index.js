import React, { useState } from "react";
import Axios from "axios";

export default shipping = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [CreditCardNumber, setCreditCardNumber] = useState(0);
    const [expiryDate, setExpiryDate] = useState();
    const [cvv, setCvv] = useState(0);
    
    const handleClick = (e) => {
        e.preventDefault();
        
    }

    return (
        <form>
            <label>الاسم الكامل: <input type="text" placeholder="Full name here" onChange={(e) => {setFullName(e.target.value)}} /></label>
            <label>البريد الإلكتروني: <input type="text" placeholder="example@gmail.com" onChange={(e) => {setEmail(e.target.value)}} /></label>
            <label>رقم الهاتف: <input type="tel" placeholder="*** **** ****" onChange={(e) => {setPhoneNumber(e.target.value)}} /></label>
            <label>عنوان السكن: <input type="text" placeholder="Address here" onChange={(e) => {setAddress(e.target.value)}} /></label>
            <label>رقم بطاقة الصراف: <input type="tel" placeholder="Credit card number" onChange={(e) => {setCreditCardNumber(e.target.value)}} /></label>
            <label>تاريخ صلاحية البطاقة: <input type="month" placeholder="MM/YYYY" onChange={(e) => {setExpiryDate(e.target.value)}} /></label>
            <label>رمز الأمان: <input type="tel" placeholder="CVV" onChange={(e) => {setCvv(e.target.value)}} /></label>
            <button onClick={handleClick}></button>
        </form>
    );
};
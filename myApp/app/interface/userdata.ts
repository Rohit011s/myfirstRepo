interface UserData {
  UserId: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  UserName: string;
  MiddleName: string;
  GstNumber: number;
  photo: string;
  isActive: boolean;
  createAt: any ;
  updateAt: any;
}

interface address {
  addressd1: string;
  addressd2: string;
  addressd3: string;
  
}

interface bankDetails {
  bankName: string;
  accountNo: number;
  ifsc: string;
}
interface cart{
    productid: number;
    productname: string;
    productprice: number;
    productimage:string;
}
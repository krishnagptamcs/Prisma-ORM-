import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// TO CREATE AN ENTRY 
async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email: username,
      firstName,
      lastName,
      password,
    },

    // while inserting key ib select object , it return the selected value in  resposne , either it is id , or username , etc
    select: {
      id: true,
      password:true
    },
  });

  console.log("resposne is ", res);
}

insertUser("krishna@gmail.com", "123456", "krishnaji", "gupta");


// TO UPDATE AN ENTRY
interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { email: username },
    data: {
      firstName,
      lastName,
    },
  });

  console.log("response is ", res);
}

updateUser("krishna@gmail.com", {
  firstName: "Krishna JI",
  lastName: "Gupta JI",
});



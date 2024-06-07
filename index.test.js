import { UserRepo, UserService } from './mockFile';
function adduser(t) {
  return t + 1;
}
// we are trying to say that like ...

//Expected: "secret1"
//Received: "secret2"
test("creating a user ", () => {
  expect(adduser(_token)).toBe(_token + 1);
});

let _token = "secret";

const fetchData = async () => {
  const response = await fetch("http://dummyjson.com/users");
  const data = await response.json();
  return data;
};

test("data is fetching", () => {
  const data = fetchData()
  expect(data).toBeInstanceOf(Object);
});



//playing with matcher
test('adding values',()=>{
  const values = 1+5;
  // expect(values).toBeGreaterThan(3)
  expect(values).toBeLessThanOrEqual(7)

})


// dealing with arrays
let arr =[1,2,3,4,5];
test('dealing with arrays',()=>{
  expect(arr).toContain(2)
})

// dealing with asynchronus 
const datafectch=()=>{
   return new Promise((resolve, reject) => {
       setTimeout(() => {
        resolve('dilshad')
       }, 3000); 
   })
}

test('dealing with promis',()=>{
  return datafectch().then((res)=>{
    expect(res).toBe('dilshad')
  })
})
// this will run before each test start
beforeEach(() => {
  console.log('initializing the databse !!!!!');
  });
  
  // this will run before each test end
afterEach(()=>{
  console.log('database is closing..');
})


// dealing with mock function
jest.mock()
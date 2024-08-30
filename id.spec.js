test('returns a random number', () => {
    jest.spyOn(Math, 'floor');
    const mockMath = Object.create(global.Math);
    const originalMath = Object.create(global.Math);
    mockMath.random = () => 0.75;
    global.Math = mockMath;
    const id = getNewId(10, 100);
    expect(id).toBe(78);
    global.Math = originalMath;
 });
function getNewId(min = 0, max = 100, ids =[]) {
   let id;
   if(ids.length===max-min+1) return "failed";
   do {
      id = Math.floor(Math.random() * (max - min + 1)) + min;
   } while (ids.indexOf(id) > -1);
   return id;
}

test('returns an integer', () => {
    const id = getNewId(10,100);
    expect(id).toBe(Math.floor(id));
 });

 test('generates a number within a defined range', () => {
    const min = 10;
    const max = 100;
    const range = [];
    for (let i = min; i < max+1; i ++) {
      range.push(i);
    }
    for (let i = 0; i < 100; i ++) {
       const id = getNewId(min, max);
       expect(range).toContain(id);
    }
 });

 test('generates a unique number', () => {
    mockIds = [1, 2, 3, 4, 5];
    let id = getNewId(1, 5, mockIds);
    expect(id).toBe('failed');
     
    id = getNewId(1, 6, mockIds);
    expect(id).toBe(6);
 });
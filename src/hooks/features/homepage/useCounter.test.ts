// import { renderHook, act } from '@testing-library/react'; // ✅ Compatible with React 18
// import useCounter from './useCounter';

// describe('useCounter', () => {
//   it('should initialize count to 0 and val to 1', () => {
//     const { result } = renderHook(() => useCounter());
//     expect(result.current.count).toBe(0);
//     expect(result.current.val).toBe(1);
//   });

//   it('should increment count by val', () => {
//     const { result } = renderHook(() => useCounter());
//     act(() => {
//       result.current.increment();
//     });
//     expect(result.current.count).toBe(1);
//   });

//   it('should update val and increment count by new val', () => {
//     const { result } = renderHook(() => useCounter());
//     act(() => {
//       result.current.setVal(5);
//       result.current.increment();
//     });
//     expect(result.current.count).toBe(5);
//   });
// });




// import { renderHook, act } from '@testing-library/react-hooks'; // ✅ Correct source
// import useCounter from './useCounter';

// describe('useCounter', () => {
//   it('should initialize count to 0 and val to 1', () => {
//     const { result } = renderHook(() => useCounter());
//     expect(result.current.count).toBe(0);
//     expect(result.current.val).toBe(1);
//   });

//   it('should increment count by val', () => {
//     const { result } = renderHook(() => useCounter());
//     act(() => {
//       result.current.increment();
//     });
//     expect(result.current.count).toBe(1);
//   });

//   it('should update val and increment count by new val', () => {
//     const { result } = renderHook(() => useCounter());

//     act(() => {
//       result.current.setVal(5); // must happen first
//     });

//     act(() => {
//       result.current.increment(); // will now use val = 5
//     });

//     expect(result.current.count).toBe(5); // ✅ should now pass
//   });
// });



import { renderHook, act } from '@testing-library/react';   // ✅ now valid
import useCounter from './useCounter';

describe('useCounter', () => {
  it('initialises count = 0 and val = 1', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('increments count by val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  it('updates val then increments by new val', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(5);   // ⚠️ ต้องปล่อยให้ state อัปเดตก่อน
    });

    act(() => {
      result.current.increment(); // จะหยิบ val = 5 มาใช้
    });

    expect(result.current.count).toBe(5);
  });
});

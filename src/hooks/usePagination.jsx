import { useMemo } from "react"

export const usePagination = (totalPages) => {
  const pageArray = useMemo(() => {
    const pArray = []
    let i = 0
    while (i < totalPages) {
      pArray.push(i + 1)
      i++;
    }
    return pArray
  }, [totalPages])

  return pageArray
}

// export const usePagination = (totalPages) => {
//     const pageArray = useMemo( () => {
//         const array = []
//         let i = 0
//         while( i < totalPages) {
//           array.push( i + 1 );
//           i++;
//         }
//       return array
//     },[totalPages])

//     return pageArray
// }
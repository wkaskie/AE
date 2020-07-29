
/* Sample math problem
   X = Y + (Z / A - (B * C))
*/
/* Data structure output
    { node: operator,
       children: {
           {left: number},
           {node: operator, children: {
               left: number,
               right: number
           }
        }
    }
*/
class doTheMath {
    convertTheString = (mathString) => {
        // TODO: Take an string input like:
        // '7 + (8 / (4 - 3)'
        // and convert it to an array
        return [7, '+', 8, '/', 4, '-', 3]; // Dummy response
    }
    makeTheTree = (mathArray, treeObj) => {
        // Uses Normal Polish Notation (of course it does...last name Kaskie lol)
        const originalLength = mathArray.length;
        while (mathArray.length !== 0) {
            if (mathArray.length === originalLength) {
                const right = mathArray.pop();
                const operator = mathArray.pop();
                const left = mathArray.pop();
                const node =
                {
                    node: operator,
                    children: {
                        left: left, right: right
                    }
                };
                treeObj = node; // for the right most content
            } else {
                const operator = mathArray.pop();
                const left = mathArray.pop()
                const node =
                {
                    node: operator,
                    children: { left: left, ...treeObj }
                }
                treeObj = node;
            }
        }
        return treeObj;
    }
}

// TEST
const mather = new doTheMath();
const testArray = mather.convertTheString('a math string'); // Mock for now
console.dir(mather.makeTheTree(testArray, {}), { depth: 6 });

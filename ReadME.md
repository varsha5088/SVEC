### Front-end Technologies

- HTML
- CSS
- Java Script
- Bootstrap framework
- Angular framework
- ReactJs

### Back-end Technologies

- Node.js
      - express.js
      - nodemoon
      - cors
      - ditenv
- PHP
- C#
- Java
- Python

### DataBases

- MogoDb
- Myseql
- SQLite
- Firebase
- Postgrassql
- Oracle

-VCS or (Source course mnagement)
       - Distributed VCS
              -Git,Mercurial
       - Remote (Central) VCS
              -Github, Bitbucket
              

### Git

-  git init
-  git add filename
-  git add filename1 filename5 filename100
-  git add . or git space add --all
-  git status
-  do git configurations (set user.name and user.email)
-  commit data with commit msg


### HTML5


  - Hyper Text Markup Language
  - Semantic Elements 
    - header 
    - section
    - artical
    - aside
    - footer
    - table
  - Block level Elements
    - h1 to h6
    - paragraphs
    - div
    - all sematic elements 
    - Text will start from new line
  - Inline Elements
    - span
    - image
    - a
    - nav
    - form
    - input
    - text area
    - legend
    - sup
    - sub

#### Task :
=====

- Audio
- Video
- canvas
- progress
- datalist
- meter
- select


### CSS
- Cascading style sheet
- Types of css
     - Inline  css
     -  Internal css
     - External css

+ Syntax of css
```
  selector{
    css properties
  }
```
#### selector

+ simple selctors
  - universal selector(*)
  - by element name
  - grouping selector(,)
  - class selector
  - id selcetor

+ combinations 
  + Decendent selecors( )
  + child selector(>)
  + Adjacent sibling selector(+)
  + General sibling selector(~)
+ Pseudo class selector
+ Psudo element selector
+ Attribute selector


### Boxmodel

-  margin
-  border
-  padding
      - padding :20px (for all adjacent sides)
      - padding :10 px 30px (10 for to and bottom , 30 for the left and right)
       - padding: 10,20,30px(10 for top, 20 for left and right,30 for bottom)
       - padding : 10,20,30,40(top ,right,bottom,left)
-  width
    - 1 rem:16px
Task2:
 
 - index.html
 - Register.html

#### Responsive wed design
 ### flex box

 + display
     - none
     - inline
     - block
     - inline-block
 + position
   - static
   - relative
   - absolute
   - fixed
   - sticky
  + algin-content
  + algin-items
  + align-self

  ### flex box
  - display
     - flex
        - flex-wrap
        - justify-content
        - flex-direction
        - flex-flow


### media quries

- extra small devices(mobiles)
  - max-width:600px
- small devices(large phones)
  - min-width:600px
  - max-width:768
- medium devices(small laptops)
  - min-width:768px
- large devices(large laptops or desktops)
  - min width:992px
- extra large devices()
  - min-width:1200px
'''
@media only screen(max-width:320px) and (max-width:500px){
  css code
  }
'''
### bootstrap 4.6

- it is a css framework
task 3:
=====

 - navbar with resposive

- module(collection of functions and classes)
- package(collection of modules)
- library(collection of packages)
- framework(collection of libraries)
 + module -->package   -->library -->framework

 + type of modes
  - offline
  - online
      - CDN links
  + background-color - bg
  + text - white

  + margin in bootstrap (m-*(0-5))
    - o--> 0rem
    - 1-->0.25rem (4px)
    - 2-->0.5rem(8px)
    - 3-->1rem(16px)
    - 4-->1.5rem(24px)
    - 2-->0.5rem(48px)
    - m (margin in all directions)
    - ml-5 (margin-left)
    - mt(margin -top)
    - mb(margin bottom)
    - mr(margin right)
   
   + padding (padding-left --> pl-5)

   + colors
    - primary
    - secondary
    - info
    - success
    - warning
    - danger
    - light
    - dark
    - white
    

    + we can use color classes for
     - buttons (btn btn-primary)
     - text (text-white)
     - background (bg-secondary)

     - alerts (alert alert-primary)
    + grid system
      - sm(small devices)
      - md(medium devices)
      - lg(large devices)
      - xl(extra large)
    + Model
    +table
### JavaScript

+ in 1995 `brenden eich` introduced java script (ES-262)
+ Java script is loosely touple and dynamic language
+ It is a text based programming languageand 
   we can use in client side and server side for
   dynamic  web applications
- ECMA - script( ES-6)
      - let & constant
      - map()
      - arrow function
      - classes
      - spread operater
      - rest perameter

+  data types
      - Number
      - BingInt (2^53-1)
      - String
      - Boolean
      - Undefined
      - Null
      - Object
      - Array
  
+  variables
  - var, let& const
  - Scope
    - function level --> var
    - block level --> let & const
  - Redefine --> var,let
  - Redeclare --> var
+ `typeof()`
+ object : contains state and behaviour

```
{
  name : "varsha"
}
```

+ Array

### Alerts

+ to generate notification
  - alert
  - prompt(to take input from the user)
  - confirmation

+ console statements
  - `console.log()`
  - `console.info()`
  - `console.warn()`
  - `console.error()`


+ Spread operator
   - to change array element from one array to another(swap)

   ```
        ...variableName
   ```

+ Rest Parameter
    + to handle function parameters

  ```
  ...parameter

  ```

+ Destruction of arrar and objects

+ Function
 - function with functionname
   ```
   function demo(){
     return x+y
   }
   demo()
   ```
   - anonomous
   ```
   let demo=function(x,y)
   {
     return x+y 
     }
    ```
  - Arrow function
  ```
  let demo=(x,y) => {
    return x*y
  }
  ```

  + for in
   - to get index values of an array
  + for-of
   - to get elements in an array

  + forEach() (ES-5)
  + map()-->(ES-6)

### DOM
  - Document object Model
  - Document
  - history
  - window
  - navigator
+ DOM methods

  - `getElementById`
  - `getElementByClassName()`
  - `quarySelector()`
  - `innerText`
  - `textContent`
  - `append`
  - `appendChild`
  - `innerHTML`
  - `setAttribute()`
  - `classList`
  - `style`
  - `src`

#### JSON
+ Javascript object Notation
    - To exchange information between application ans server
  
```
{
    "name": "sri varsha varikunta",
    "salary" : "6.5LPA",
    "designation":"MERN Developer",
    "mobile":8243854054
}
```
+ Ajax (Asynchronous JavaScript And XML.) call or Promises(fetch API) or axios


### Reference websites
 
 - [clourcodes]( https://htmlcolorcodes.com/)
 - [fatation]( https://www.flaticon.com/)
 - [webaim]( https://webaim.org/resources/contrastchecker/)
 - [GITHUB LOGIN](https://github.com/varsha5088)
 - [JSON](https://jsonlint.com/)
 - [bootStrap](https://getbootstrap.com/)

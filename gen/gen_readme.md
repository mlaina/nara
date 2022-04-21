# Factory
This program is a small script that generates all the necessary elements to introduce a new model to the **NARA** structure.

`./factory.sh -n $name -p $pluralname -P $params`

If the param `-p` is missing by default the script add an **'s'** to the name.

## Postman
*templates/template.postman.json*
  - **$name**
  - **$pluralname**
  - **$paramsjson**

---
## Controller
*templates/template.controller.js* 
  - **$mayusname**
  - **$name**
  - **$pluralname**
  
 ---
 ## Routes
 - *templates/template.routes.js* 
   - **$name**
   - **$pluralname**
   
  - *routes.js* - append the rows to the file:
   ~~~   
      const $nameRoutes       = require('./$name.routes');
  
      $nameRoutes(app);
   ~~~
 ---
 ## Model
  - *templates/template.js*
    - **$mayusname**
    - **$params**
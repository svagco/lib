
```### makeElement => string
[
  ["name", "string"],
  ["options", "MakeElementOptions"]
]
```

This function will create an element as a string given its name and the options. The attributes will be split by new lines whenever the line width reaches the length of 100 symbols, and each line of the content will be indented by 2 spaces as well.

%TYPEDEF types/make-element.xml MakeElementOptions%

%EXAMPLE: example/make-element.js, ../src => @svag/lib%

%FORK-svg example example/make-element%

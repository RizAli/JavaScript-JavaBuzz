# Java Buzz

Testing with Jasmine
---------------------


Testing Framework used: Jasmine


Setting up the testing framework :
----------------------------------

Download latest build https://github.com/jasmine/jasmine/releases

- create a directory with appropriate name, e.g JavaScript-JavaBuzz.
- create a lib directory
- Transfered over the lib directory from the downloaded jasmine latest build folder - jasmine-2.3.4

- create spec/JavabuzzSpec.js
- create src/Javabuzz.js

- Copy over the SpecRunner.html from the downloaded Jasmine folder

```
<!-- include source files here... -->
  <script src="src/Player.js"></script>
  <script src="src/Song.js"></script>

  <!-- include spec files here... -->
  <script src="spec/SpecHelper.js"></script>
  <script src="spec/PlayerSpec.js"></script>
```
and changed it to this

```
 <!-- include source files here... -->
  <script type="text/javascript" src="src/Javabuzz.js"></script>

  <!-- include spec files here... -->
  <script type="text/javascript" src="spec/JavabuzzSpec.js"></script>

```



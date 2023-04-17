# Comic-Zone-Client

## Figma
[FIGMA DESIGN](https://www.figma.com/file/ruQRvOxiSGHeJRbu6sug95/Scrum---Comic-gallery?node-id=1-2&t=1aDQztMobeLa3Oza-0)

## Contribution
<br />
Here's our branch structure: **Main, Develop, Features and Fixes.**
<br />
-- The main branch is off limits for now. That's our live production branch
<br />
-- The develop branch is where we merge all our features/fixes/work together
<br />
-- The features branch is the one you would create for the feature you are working on.
<br />
-- The fix branch is the one you would create for the fix you are working on.
<br />


If this is your first time here, first clone this repository if not skip this step.
   ```sh
   git clone https://github.com/Scrum-Team-C/Comic-Zone-Client
   ```
   
then 
   
   ```sh
   cd Comic-Zone-Client
   ```
These are the steps to take:

If you are working on a page/feature for e.g Cart, 

1. Check out to develop branch (git checkout develop)
   
   ```sh
   git checkout develop && npm i
   ```

2. Create your own branch. 
<br />
If you are working on a feature (e.g git checkout -b feature/cart), That command also checks out into the feature/cart branch.

```sh
   git checkout -b feature/cart
```
If you are working on a bug fix (e.g git checkout -b fix/cartCountCorrection), That command also checks out into the fix/cartCountCorrection.
   
```sh
  git checkout -b fix/cartCountCorrection
```

3. Write your code, commit, and push to remote. I guess we know how to commit and push our codes.

4. When you are done with the feature and now want to merge to _develop_,
   check out to _develop_ (git checkout develop)
   ```sh
   git checkout develop
   ```
   pull to make sure you have all current changes in _develop_ (git pull origin develop)
   ```sh
   git pull origin develop
   ```   
   Check out to your _feature/cart_ branch if you worked on a feature, (git checkout feature/cart)
   ```sh
   git checkout feature/cart
   ``` 
   or your _fix/cartCountCorrection_ branch if you worked on a fix, (git checkout fix/cartCountCorrection)
    ```sh
   git checkout fix/cartCountCorrection
   ``` 
  
   
   then merge in _develop_ (git merge develop)
   ```sh
   git merge develop
   ```  
   Fix possible merge conflicts, then push to remote (git push)
   ```sh
   git push origin [your_local_branch_name]
   ``` 

5. Go on Github. Click _create pull request_. 
6. Choose the branches you want to merge, 
7. making sure that you're merging _cart_ branch into _develop_. (please verify that the branch you want to merge to is _develop_. )
8. You can drop comments on the pull request. I will look at it and then merge it into _develop_
9. If you are experiencing any issues contact Adaobi or Charles or Ifechi


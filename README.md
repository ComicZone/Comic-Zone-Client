# Comic-Zone-Client

We are going to create branches according to features and when you are done with the feature. you create another branch for the next feature you are working on. And you can only create a pull request, and inform me and i will merge. and please when you want to create a pull request on github, please please verify that the branche you want to merge to is develop. We do not have any business with the main branch for now.

These are the steps to take:

I will be using cart as an example here.

1. Check out to develop branch (git checkout develop)

2. Create your own branch. (git checkout -b cart). That command also checks out into the cart branch.

3. Write your code, commit, and push to remote. I guess we know how to commit and push our codes.

4. When you are done with the feature and now want to merge to _develop_,
   check out to _develop_ (git checkout develop)
   pull, to make sure you have all current changes in _develop_ (git pull origin develop)
   Check out to your _cart_ branch, (git checkout cart)
   then merge in _develop_ (git merge develop)
   Fix possible merge conflicts, then push to remote (git push)

5. Go on Github. Click _create pull request_. Choose the branches you want to merge, making sure that you're merging _cart_ branch into _develop_. You can drop comments on the pull request. I will look at it and then merge it into _develop_

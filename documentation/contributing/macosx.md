---
layout: default
title: Mac OS X installation
---

# Installation on Mac OS X platform
*The installation was tested on Mountain Lion version*

Following packages are required to setup Jekyll :

1. HomeBrew
1. Command Line Tools for XCode
1. Automake
1. RVM Installation
1. Install Ruby
1. Jekyll
1. Test drive your jekyll setup

## Install HomeBrew

- Launch the following command to install homebrew

{% highlight text %}
MacBookPro:~ user$ ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
==> This script will install:
/usr/local/bin/brew
...
==> Installation successful!
You should run `brew doctor' *before* you install anything.
Now type: brew help
{% endhighlight %}

## Install Command Line Tools for XCode
This package is the best of all tools that you needs.

- You have XCode installed, go to the preference\download\components, and click install on the "Command Line Tools" component

or

- You don't have XCode installed, go download it to the [https://developer.apple.com/downloads/index.action][1], find the "Command Line Tools" and install

[1]: https://developer.apple.com/downloads/index.action

## Install Automake

- Execute the following command

{% highlight text %}
MacBookPro:~ user$ brew install automake
==> Installing automake dependency: autoconf
...
==> make install
/usr/local/Cellar/automake/1.13.4: 126 files, 2,4M, built in 13 seconds
{% endhighlight %}

## Install RVM

- Execute the following command

{% highlight text %}
MacBookPro:bin user$ curl -L https://get.rvm.io | bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   184  100   184    0     0    100      0  0:00:01  0:00:01 --:--:--   156
100 13376  100 13376    0     0   4953      0  0:00:02  0:00:02 --:--:--  325k
Downloading RVM from wayneeseguin branch master
...
# user,
#
#   Thank you for using RVM!
#   I sincerely hope that RVM helps to make your life easier and
#   more enjoyable!!!
#
# ~Wayne
{% endhighlight %}

## Install Ruby

- Use rvm to install the ruby version 1.9.3

{% highlight text %}
MacBookPro:bin user$ rvm install 1.9.3
Searching for binary rubies, this might take some time.
No binary rubies available for: osx/10.8/x86_64/ruby-1.9.3-p429.
...
ruby-1.9.3-p429 - #adjusting #shebangs for (gem irb erb ri rdoc testrb rake).
ruby-1.9.3-p429 - #importing default gemsets, this may take time...................
Install of ruby-1.9.3-p429 - #complete 
{% endhighlight %}

## Install Jekyll

- In order to be as compatible as possible with GitHub's Pages servers, check the [recommended version][1] of the jekyll gem to install.

- Install the recommended version (1.0.3 as of today)

{% highlight text %}
MacBookPro:bin user$ gem install jekyll --version '=1.0.3'
Fetching: liquid-2.5.0.gem (100%)
Fetching: fast-stemmer-1.0.2.gem (100%)
...
Installing RDoc documentation for safe_yaml-0.7.1...
Installing RDoc documentation for colorator-0.1...
Installing RDoc documentation for jekyll-1.0.3...
{% endhighlight %}

[1]: https://help.github.com/articles/using-jekyll-with-pages#troubleshooting

- Check that your local python version is greater than or equal to 2.4

{% highlight text %}
MacBookPro:~ user$ python --version
Python 2.6.6
{% endhighlight %}

## Test drive your jekyll setup

- Run the following commands

{% highlight text %}
MacBookPro:~ user$ jekyll new myblog
New jekyll site installed in /Users/user/myblog.

MacBookPro:~ user$ cd myblog/
MacBookPro:myblog user$ jekyll server
Configuration file: /Users/user/Documents/myblog/_config.yml
            Source: /Users/user/Documents/myblog
       Destination: /Users/user/Documents/myblog/_site
      Generating... done.
 Auto-regeneration: enabled
[2013-06-26 02:45:24] INFO  WEBrick 1.3.1
[2013-06-26 02:45:24] INFO  ruby 1.9.3 (2013-05-15) [x86_64-darwin12.4.0]
[2013-06-26 02:45:24] INFO  WEBrick::HTTPServer#start: pid=74446 port=4000
{% endhighlight %}

- Open a browser and enter the following URL `http://localhost:4000`
- Profit!

Congratulation! your environment is now ready to contribute to the LibGit2Sharp documentation

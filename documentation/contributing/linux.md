---
layout: default
title: Linux installation
---

# Installation on Linux plateform
*The installation was tested on Debian 6.0*

Following packages are required to setup Jekyll :

1. Ruby
1. Jekyll
1. Test drive your jekyll setup

## Install Ruby

- Launch the following command to install ruby 1.9.3

{% highlight text %}
user@debian:~$ sudo curl -L https://get.rvm.io | bash -s stable --ruby=1.9.3
[sudo] password for user:
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 13376  100 13376    0     0   7665      0  0:00:01  0:00:01 --:--:-- 26331
...
Saving wrappers to '/home/user/.rvm/bin'........

  * To start using RVM you need to run `source /home/user/.rvm/scripts/rvm`
    in all your open shell windows, in rare cases you need to reopen all shell windows.

user@debian:~$ ruby --version
ruby 1.9.3p429 (2013-05-15 revision 40747) [x86_64-linux]
{% endhighlight %}

## Install Jekyll

- In order to be as compatible as possible with GitHub's Pages servers, check the [recommended version][1] of the jekyll gem to install.

- Install the recommended version (1.0.3 as of today)

{% highlight text %}
user@debian:~$gem install --version '= 1.0.3' jekyll
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
user@debian:~$ python --version
Python 2.6.6
{% endhighlight %}

## Test drive your jekyll setup

- Run the following commands

{% highlight text %}
user@debian:~$ jekyll new myblog
New jekyll site installed in /home/user/myblog.

user@debian:~$ cd myblog/
user@debian:~/myblog$ jekyll server
Configuration file: /home/user/myblog/_config.yml
            Source: /home/user/myblog
       Destination: /home/user/myblog/_site
      Generating... done.
 Auto-regeneration: enabled
[2013-06-24 11:06:24] INFO  WEBrick 1.3.1
[2013-06-24 11:06:24] INFO  ruby 1.9.3 (2013-05-15) [x86_64-linux]
[2013-06-24 11:06:24] INFO  WEBrick::HTTPServer#start: pid=1198 port=4000
{% endhighlight %}

- Open a browser and enter the following URL `http://localhost:4000`
- Profit!

Congratulation! your environment is now ready to contribute to the LibGit2Sharp documentation

背景：一台正常的局域网内的电脑，以此为开启服务。

### 127.0.0.1 含义

凡是以 127 开头的 IP 地址，都是回环地址（Loop back address），其所在的回环接口一般被理解为虚拟网卡，并不是真正的路由器接口。
通俗的讲，就是我们在主机上发送给 127 开头的 IP 地址的数据包会被发送的主机自己接收，根本传不出去，外部设备也无法通过回环地址访问到本机。所以以此开启的服务只能被本机所使用。

### 0.0.0.0 含义

可以理解为监听了所有指向自己电脑的 ipv4 地址，也可以算是一个无效的，未知的或者不可用的目标 IP 占位符。监听 0.0.0.0 之后：
因为本机的 127 地址是回环地址，其最终都是指向本机的，所以发的数据包无论如何都会被本机收到，也就是也会被 0.0.0.0 监听到，那么只要端口号正确，无论访问的是任意 127.x.x.x，其结果都是一样的。
而本机所在的局域网 IP (192.168.x.x) 也是能代表唯一的自己的，也就是也会被 0.0.0.0 监听到，而局域网 IP 不是回环地址，是可以被其他局域网的用户通过 IP 找到你的，所以别人也可以通过局域网 IP 访问到你(无防火墙之类)，是一个道理。

### localhost 含义

localhost 是一个域名 不是 IP。在 Windows 中一般认为 localhost 等于 127.0.0.1，因为 windows 中的默认 DNS 映射文件 hosts 中定义的就是 localhost 映射到 127.0.0.1，当然也可以自己去定义它。

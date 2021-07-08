f = open("day14/input.txt").read().strip().split("\n")


l = []
s = []
tot = 0


mask = ""

# not used for part 2
def itob(v):
    b = ('{0:0%db}' % len(mask)).format(v)
    for i in range(len(mask)):
        if mask[i] != 'X':
            b = b[:i] + mask[i] + b[i + 1:]
    return b
    

def get_addrs(addr):
    addrs = []
    b = ('{0:0%db}' % len(mask)).format(addr)
    for i in range(len(mask)):
        if mask[i] != '0':
            b = b[:i] + mask[i] + b[i + 1:]
    left = [b]
    while len(left) > 0:
        addr = left.pop(0)
        xloc = addr.find('X')
        if xloc == -1:
            addrs.append(int(addr,2))
        else:
            left.append(addr[:xloc] + '1' + addr[xloc+1:])
            left.append(addr[:xloc] + '0' + addr[xloc+1:])
    return addrs
    

d = {}
for line in f:
    if line[:4] == "mask":
        mask = line.split(" = ")[1]
    else:
        mem, val = line.split(" = ")
        addr = mem[4:-1]
        addrs = get_addrs(int(addr))
        for ad in addrs:
            d[ad] = int(val)


for k in d:
    tot += d[k]
    
print(tot)
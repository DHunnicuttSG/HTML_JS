# 📘 **IP Networking & Addressing**

## 🎯 **Lesson Objectives**

By the end of this lesson, students will be able to:

*   Explain what an IP address is and why it’s needed.
*   Understand the differences between IPv4 and IPv6.
*   Identify public vs private IP addresses.
*   Understand subnet masks, CIDR notation, and network boundaries.
*   Recognize the historical IP classes.
*   Apply concepts to real-world networking scenarios.

***

# 🕒 **Lesson Duration**

**60–90 minutes** (lecture + discussion + practice)

***

# 🏁 **1. Introduction to IP Networking (10 minutes)**

### **What is an IP address?**

*   A unique identifier assigned to every device on a network.
*   Similar to a “postal address” but for digital communication.
*   Required for devices to send/receive data.

### **Two primary types of communications in IP:**

*   **Unicast** – one-to-one communication
*   **Broadcast** – one-to-many (IPv4 only)
*   **Multicast** – one-to-group

Explain the role of:

*   **Router:** Directs traffic between networks
*   **Network:** Group of devices sharing a defined address space

***

# 🌍 **2. IPv4 Addressing (20 minutes)**

### **Structure**

*   32 bits (4 octets)
*   Represented in dotted decimal notation  
    Example: `192.168.1.10`

### **Binary breakdown**

    192     . 168    . 1      . 10
    11000000.10101000.00000001.00001010

### **Components**

*   **Network portion** – identifies the network
*   **Host portion** – identifies the device

### **Subnet Mask**

Indicates where network part ends and host part begins:

*   Example: `255.255.255.0`
*   CIDR notation: `/24`

Explain how masks work and why subnetting exists.

***

# 🔢 **3. CIDR Notation (10 minutes)**

### **Classless Inter‑Domain Routing**

*   Replaced the classful system.
*   Expressed as a slash followed by network bits.  
    Examples:
*   `/24` = 255.255.255.0
*   `/16` = 255.255.0.0
*   `/8`  = 255.0.0.0

### Why CIDR matters:

*   Reduces waste of IP addresses
*   Enables flexible network design
*   Used in all modern networks

Instructor activity:  
Show 2–3 quick CIDR examples and how many hosts each allows.

***

# 🏷️ **4. Private vs Public IPv4 Addresses (10 minutes)**

### **Private (RFC 1918) ranges**

These **cannot be routed on the internet**:

#### **Class A Private Range**

    10.0.0.0 – 10.255.255.255

#### **Class B Private Range**

    172.16.0.0 – 172.31.255.255

#### **Class C Private Range**

    192.168.0.0 – 192.168.255.255

### **Public Addresses**

*   Assigned by ISPs
*   Globally unique

### **Special-purpose ranges**

*   APIPA / Link-local: `169.254.0.0/16`
*   Loopback: `127.0.0.1`
*   Broadcast: `255.255.255.255`

***

# 🧱 **5. Historical IP Address Classes (10 minutes)**

Although replaced by CIDR, these still appear in:

*   Legacy equipment
*   Older exams
*   Documentation

| Class | Range                       | Default Mask  | Network Size        |
| ----- | --------------------------- | ------------- | ------------------- |
| **A** | 0.0.0.0 – 127.255.255.255   | 255.0.0.0     | Very large networks |
| **B** | 128.0.0.0 – 191.255.255.255 | 255.255.0.0   | Medium networks     |
| **C** | 192.0.0.0 – 223.255.255.255 | 255.255.255.0 | Small networks      |
| **D** | 224.0.0.0 – 239.255.255.255 | Multicast     |                     |
| **E** | 240.0.0.0 – 255.255.255.255 | Experimental  |                     |

Instructor Tip:  
Emphasize that Class D = multicast (important for streaming/media).

***

# 🌐 **6. IPv6 Addressing (15 minutes)**

### **Structure**

*   128 bits
*   Written in hexadecimal
*   Separated by colons

Example:

    2001:0db8:85a3:0000:0000:8a2e:0370:7334

### **Shorthand Rules**

Two big simplifications:

1.  Remove leading zeros  
    `0370 → 370`

2.  Replace contiguous groups of zeros with `::`  
    Example:
        2001:db8:85a3::8a2e:370:7334

### **Why IPv6?**

*   IPv4 exhaustion
*   Improved routing
*   Built‑in IPsec
*   Auto-configuration (SLAAC)
*   No NAT required

### **IPv6 Address Types**

*   **Global Unicast** → like public IPv4
*   **Link-Local** → `fe80::/10`
*   **Loopback** → `::1`
*   **Multicast** → `ff00::/8`

Instructor Activity:  
Show 3 IPv6 addresses and have students identify their type.

***

# 🧪 **7. Applied Learning (10 minutes)**

### **Scenario Examples**

1.  Your router LAN is 192.168.1.0/24
    *   What’s the network?
    *   What’s the range of usable hosts?
    *   What’s the broadcast address?

2.  Your device auto‑assigned 169.254.12.88
    *   What does this mean?

3.  Your company is moving to IPv6
    *   What benefits will they gain?

***

# 🎤 **8. Summary & Takeaways**

Students should now understand:

*   What IP addresses do and why they matter.
*   The differences between IPv4 and IPv6.
*   How private IP ranges work.
*   What CIDR notation means.
*   The legacy classful system.
*   How to identify address types and purposes.

***

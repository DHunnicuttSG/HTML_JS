# 📘 **Numbering Systems in IT & IP Addressing Fundamentals**

## 🎯 **Lesson Objectives**

By the end of this lesson, students will be able to:

*   Understand and explain the four main numbering systems used in IT.
*   Convert numbers between binary, decimal, hexadecimal, and octal.
*   Describe how these numbering systems are used in programming, networking, and hardware.
*   Explain IPv4 and IPv6 addressing.
*   Identify private IP address ranges and the historical IP address classes.

***

# 🧠 **1. Why Numbering Systems Matter in IT**

Computers work at the electrical level. They do not store, process, or represent data the way humans do.  
Understanding numbering systems helps students:

*   Troubleshoot and configure networks
*   Understand subnetting and IP addressing
*   Read memory addresses
*   Understand file permissions (Linux)
*   Work with low‑level computing tasks

***

# 🔢 **2. Numbering Systems Overview**

## **A. Decimal (Base‑10)**

*   The number system humans use.
*   Digits: **0–9**
*   Each column represents powers of 10.

Example:  
`351 = 3×10² + 5×10¹ + 1×10⁰`

### **Where it's used in IT**

*   User-facing values (file sizes, measurements, clock times).
*   IP addresses as humans read them (192.168.1.1).
*   Decimal permissions in Windows ACLs.

***

## **B. Binary (Base‑2)**

*   The **language of computers**.
*   Digits: **0 and 1**
*   Represents electrical states (off/on).

Example:  
`1011₂ = 1×8 + 0×4 + 1×2 + 1×1 = 11`

### **Where binary is used in IT**

*   Memory addresses
*   CPU instructions
*   Networking subnet masks (e.g., /24)
*   File and disk structures
*   Boolean logic

Binary is the foundation of ALL computing.

***

## **C. Octal (Base‑8)**

*   Digits: **0–7**

Example:  
`157₈ = 1×64 + 5×8 + 7×1 = 111`

### **Where octal is used in IT**

*   **Linux file permissions** (very common):
    *   `rwxr-xr-x` → `755`
    *   `rw-r--r--` → `644`
*   Older Unix systems used octal in hardware addressing.

Octal is mostly visible today in **UNIX/Linux permissions**.

***

## **D. Hexadecimal (Base‑16)**

*   Digits: **0–9, A–F**
    *   A = 10
    *   B = 11
    *   C = 12
    *   D = 13
    *   E = 14
    *   F = 15

Example:  
`2F₁₆ = 2×16 + 15 = 47`

### **Where hexadecimal is used in IT**

*   Memory addresses (e.g., `0x7FFEDEAD`)
*   MAC addresses (`AA:BB:CC:DD:EE:FF`)
*   IPv6 addresses (entirely hex)
*   Color codes in web development (`#FF5733`)
*   Assembly and machine code

Hex is compact and maps cleanly to binary—**1 hex digit = 4 bits**.

***

# 🧩 **3. Numbering System Conversion Examples**

### **Binary → Decimal**

    1101₂ = 8 + 4 + 0 + 1 = 13

### **Decimal → Binary**

13 → `1101`

### **Hex → Binary**

    A3₁₆ = A(1010) 3(0011) → 10100011₂

### **Binary → Hex**

    10110110₂ → B6₁₆

We can include more examples or practice worksheets if needed.

***

# 🌐 **4. IP Addressing Fundamentals**

## **A. IPv4 Addresses**

*   32‑bit address
*   Written in dotted‑decimal format:
    *   Example: `192.168.0.1`
*   Total addresses: **\~4.3 billion**

### **Binary structure of IPv4**

    192.168.1.10
    11000000.10101000.00000001.00001010

***

## **B. IPv6 Addresses**

*   128‑bit address
*   Written in hexadecimal
*   Example:
        2001:0db8:85a3:0000:0000:8a2e:0370:7334
*   Total addresses: **3.4×10³⁸** (practically infinite)

### Why IPv6 exists:

*   IPv4 ran out.
*   IPv6 supports:
    *   better routing
    *   built‑in security (IPsec)
    *   more efficient autoconfiguration

***

# 🔒 **5. Private IPv4 Address Ranges**

Private IPs are **not routable** on the internet.  
Used inside homes, offices, and internal networks.

### **Class A Private Range**

    10.0.0.0 – 10.255.255.255

### **Class B Private Range**

    172.16.0.0 – 172.31.255.255

### **Class C Private Range**

    192.168.0.0 – 192.168.255.255

These ranges are defined in **RFC 1918**.

***

# 🏷️ **6. IP Address Classes (Historical)**

Modern networks use **CIDR** notation, not classful addressing,  
but IT pros must know these for the exam world and legacy systems.

| Class | Range                       | Default Mask  | Purpose             |
| ----- | --------------------------- | ------------- | ------------------- |
| **A** | 0.0.0.0 – 127.255.255.255   | 255.0.0.0     | Very large networks |
| **B** | 128.0.0.0 – 191.255.255.255 | 255.255.0.0   | Medium networks     |
| **C** | 192.0.0.0 – 223.255.255.255 | 255.255.255.0 | Small networks      |
| **D** | 224.0.0.0 – 239.255.255.255 | N/A           | Multicast           |
| **E** | 240.0.0.0 – 255.255.255.255 | N/A           | Experimental        |

***

# 🧠 **7. Real‑World Usage Examples**

### **Binary in networking**

*   Subnet masks (e.g., /26 → 11111111.11111111.11111111.11000000)

### **Hex in networking**

*   IPv6
*   MAC addresses

### **Decimal in networking**

*   IP addresses as shown to users
*   Port numbers

### **Octal in systems administration**

*   Linux file permissions
    *   `chmod 755 script.sh`

***

# 🎤 **Wrap‑Up and Review**

Students should now understand:

*   The major numbering systems and why they exist.
*   How to convert between them.
*   The role of binary and hex in hardware and networking.
*   IPv4 structure, IPv6 structure.
*   Private IP addressing.
*   The legacy IP class system.

***

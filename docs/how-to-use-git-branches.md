# How to use git branches

```mermaid
---
config:
  theme: redux
  layout: dagre
---
flowchart TD
 subgraph s1["local main"]
        n4["empty"]
        n6["001 initial commit"]
        n9["001 initial commit"]
        n21["001 initial commit"]
        n27["001 initial commit"]
        n32["001 initial commit"]
        n37["Untitled Node"]
        n40["001"]
        n44["002 something new"]
  end
 subgraph s2["remote origin/main"]
        n5["empty"]
        n7["001 initial commit"]
        n8["empty"]
        n20["001 initial commit"]
        n26["001 initial commit"]
        n31["001 initial commit"]
        n36["Untitled Node"]
        n39["002 something new"]
        n45["002 something new"]
  end
 subgraph s3["actions"]
        n2["push"]
        rectId["Commit to main:<b>001 initial commit</b>"]
        n10["create repository"]
        n11@{ label: "create branch <b style=\"font-weight:\">feature/something-new from main </b>and publish" }
        n22["Commit to feature/something-new:002 something new"]
        n30["push"]
        n33["create pull request from feature/something-new to main"]
        n38["merge request feature/something-new to main"]
        n43["fetch on local"]
  end
 subgraph s4["local feature/something-new"]
        n12["n/d"]
        n13["n/d"]
        n14["n/d"]
        n18["001 initial commit"]
        n24["002 something new"]
        n29["002 something new"]
        n34["Untitled Node"]
        n41["002"]
        n46["002 something new"]
  end
 subgraph s5["remote feature/something-new"]
        n15["n/d"]
        n16["n/d"]
        n17["n/d"]
        n19["001 initial commit"]
        n25["002 something new"]
        n28["001 initial commit"]
        n35["Untitled Node"]
        n42["002"]
        n47["002 something new"]
  end
    n4 --> n6
    rectId --> n2
    n5 --> n8
    n8 --> n7
    n6 --> n9
    n10 --> rectId
    n2 --> n11
    n12 --> n13
    n13 --> n14
    n15 --> n17
    n17 --> n16
    n16 --> n19
    n14 --> n18
    n9 --> n21
    n7 --> n20
    n11 --> n22
    n18 --> n24
    n19 --> n28
    n21 --> n27
    n20 --> n26
    n28 --> n25
    n24 --> n29
    n22 --> n30
    n26 --> n31
    n27 --> n32
    n30 --> n33
    n29 --> n34
    n25 --> n35
    n31 --> n36
    n32 --> n37
    n33 --> n38
    n36 --> n39
    n37 --> n40
    n34 --> n41
    n35 --> n42
    n38 --> n43
    n40 --> n44
    n39 --> n45
    n41 --> n46
    n42 --> n47
    n21@{ shape: rect}
    n27@{ shape: rect}
    n7@{ shape: rect}
    n20@{ shape: rect}
    n26@{ shape: rect}
    rectId@{ shape: tag-proc}
    n11@{ shape: rect}
    n12@{ shape: rect}
    n13@{ shape: rect}
    n14@{ shape: rect}
    n18@{ shape: rect}
    n24@{ shape: rect}
    n29@{ shape: rect}
    n15@{ shape: rect}
    n16@{ shape: rect}
    n17@{ shape: rect}
    n19@{ shape: rect}
    n25@{ shape: rect}
    style n6 fill:#FFE0B2
    style n9 fill:#FFE0B2
    style n21 fill:#FFE0B2
    style n27 fill:#FFE0B2
    style n7 fill:#FFE0B2
    style n20 fill:#FFE0B2
    style n26 fill:#FFE0B2
    style rectId fill:#FFE0B2
    style n22 fill:#FF6D00
    style n13 fill:#FFE0B2
    style n14 fill:#FFE0B2
    style n18 fill:#FFE0B2
    style n24 fill:#FF6D00
    style n29 fill:#FF6D00
    style n16 fill:#FFE0B2
    style n19 fill:#FFE0B2
    style n25 fill:#FF6D00
    style s1 fill:#C8E6C9
    style s2 fill:#BBDEFB
    style s4 fill:#C8E6C9
    style s5 fill:#BBDEFB
    linkStyle 0 stroke:#AA00FF,fill:none
    linkStyle 1 stroke:#2962FF,fill:none
    linkStyle 3 stroke:#2962FF,fill:none
    linkStyle 5 stroke:#AA00FF,fill:none
    linkStyle 6 stroke:#E1BEE7,fill:none
    linkStyle 11 stroke:#E1BEE7,fill:none
    linkStyle 12 stroke:#E1BEE7,fill:none
    linkStyle 15 stroke:#D50000,fill:none
    linkStyle 16 stroke:#D50000,fill:none
    linkStyle 20 stroke:#FF6D00,fill:none
    linkStyle 22 stroke:#FF6D00,fill:none
    linkStyle 30 stroke:#FFD600,fill:none
    linkStyle 31 stroke:#FFD600,fill:none
    linkStyle 35 stroke:#00C853,fill:none
    linkStyle 36 stroke:#00C853,fill:none
```
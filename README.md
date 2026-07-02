# React_Qspider
Repository to track day to day class.

---

## How to Download a Specific Day's Folder

If you only want to download a specific day's resources without downloading the entire repository, you can use Git's sparse-checkout feature. Run the following commands in your terminal:

1. **Clone the repository without checking out the files:**
   ```bash
   git clone --no-checkout https://github.com/PurnabrataPanja/React_Qspider.git

2. **Navigate into the cloned directory:**
   ```bash
   cd React_Qspider

3. **Initialize sparse-checkout:**
   ```bash
   git sparse-checkout init --cone

4. **Set the specific folder you want to download:**
   ```bash
   git sparse-checkout set Day_14_CURD

5. **Checkout the main branch to pull the files:**
   ```bash
   git checkout main

6. **after cloning, run:**
   ```bash
   npm install   

   

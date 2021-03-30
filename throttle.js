        //节流
        if (this.lastLazyTime && new Date() - this.lastLazyTime < 800) {
            return;
        }
        this.lastLazyTime = new Date();

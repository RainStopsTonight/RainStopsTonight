        if (typeof HTMLElement !== "undefined" && !HTMLElement.prototype.insertAdjacentElement) {
            HTMLElement.prototype.insertAdjacentElement = function(where, parsedNode) {
                switch (where.toLowerCase()) {
                    case 'beforebegin':
                        this.parentNode.insertBefore(parsedNode, this)
                        break;
                    case 'afterbegin':
                        this.insertBefore(parsedNode, this.firstChild);
                        break;
                    case 'beforeend':
                        this.appendChild(parsedNode);
                        break;
                    case 'afterend':
                        if (this.nextSibling)
                            this.parentNode.insertBefore(parsedNode, this.nextSibling);
                        else this.parentNode.appendChild(parsedNode);
                        break;
                }
            }
            HTMLElement.prototype.insertAdjacentHTML = function(where, htmlStr) {
                var r = this.ownerDocument.createRange();
                r.setStartBefore(this);
                var parsedHTML = r.createContextualFragment(htmlStr);
                this.insertAdjacentElement(where, parsedHTML)
            }
            HTMLElement.prototype.insertAdjacentText = function(where, txtStr) {
                var parsedText = document.createTextNode(txtStr)
                this.insertAdjacentElement(where, parsedText)
            }
        }

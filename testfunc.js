    function Random() {
        var rnd = Math.floor(Math.random() * 100);
        parent.ctop.document.form1.a.value = "0";
        parent.ctop.document.form1.m.value = "("+ new Date().toLocaleString() + ") Leaning into the Box of Magic Numbers (TM), I pull out a little slip of paper that reads.....<font color='red' size='large'>" + rnd + "</font>!";
        parent.ctop.document.form1.submit ();
    }

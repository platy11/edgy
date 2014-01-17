world.children[0].openBlocksString('<blocks app="Snap! 4.0, http:\/\/snap.berkeley.edu" version="1"><block-definition s="map %&apos;function&apos; over %&apos;lists&apos;" type="reporter" category="lists"><inputs><input type="%repRing"><\/input><input type="%mult%l"><\/input><\/inputs><script><block s="doWarp"><script><block s="doDeclareVariables"><list><l>mapone<\/l><l>mapmany<\/l><\/list><\/block><block s="doSetVar"><l>mapone<\/l><block s="reifyScript"><script><block s="doIf"><custom-block s="empty? %l"><block var="data"\/><\/custom-block><script><block s="doReport"><block s="reportNewList"><list><\/list><\/block><\/block><\/script><\/block><block s="doReport"><block s="reportCONS"><block s="evaluate"><block var="function"\/><list><block s="reportListItem"><l>1<\/l><block var="data"\/><\/block><\/list><\/block><block s="evaluate"><block var="mapone"\/><list><block s="reportCDR"><block var="data"\/><\/block><\/list><\/block><\/block><\/block><\/script><list><l>data<\/l><\/list><\/block><\/block><block s="doSetVar"><l>mapmany<\/l><block s="reifyScript"><script><block s="doIf"><custom-block s="empty? %l"><block s="reportListItem"><l>1<\/l><block var="data lists"\/><\/block><\/custom-block><script><block s="doReport"><block s="reportNewList"><list><\/list><\/block><\/block><\/script><\/block><block s="doReport"><block s="reportCONS"><block s="evaluate"><block var="function"\/><custom-block s="map %repRing over %mult%l"><block s="reifyReporter"><autolambda><block s="reportListItem"><l>1<\/l><l\/><\/block><\/autolambda><list><\/list><\/block><list><block var="data lists"\/><\/list><\/custom-block><\/block><block s="evaluate"><block var="mapmany"\/><list><custom-block s="map %repRing over %mult%l"><block s="reifyReporter"><autolambda><block s="reportCDR"><l\/><\/block><\/autolambda><list><\/list><\/block><list><block var="data lists"\/><\/list><\/custom-block><\/list><\/block><\/block><\/block><\/script><list><l>data lists<\/l><\/list><\/block><\/block><block s="doIfElse"><custom-block s="empty? %l"><block s="reportCDR"><block var="lists"\/><\/block><\/custom-block><script><block s="doReport"><block s="evaluate"><block var="mapone"\/><list><block s="reportListItem"><l>1<\/l><block var="lists"\/><\/block><\/list><\/block><\/block><\/script><script><block s="doReport"><block s="evaluate"><block var="mapmany"\/><list><block var="lists"\/><\/list><\/block><\/block><\/script><\/block><\/script><\/block><\/script><\/block-definition><block-definition s="empty? %&apos;data&apos;" type="predicate" category="lists"><inputs><input type="%l"><\/input><\/inputs><script><block s="doReport"><block s="reportEquals"><block var="data"\/><block s="reportNewList"><list><\/list><\/block><\/block><\/block><\/script><\/block-definition><block-definition s="keep items such that %&apos;pred&apos; from %&apos;data&apos;" type="reporter" category="lists"><inputs><input type="%predRing"><\/input><input type="%l"><\/input><\/inputs><script><block s="doWarp"><script><block s="doIf"><custom-block s="empty? %l"><block var="data"\/><\/custom-block><script><block s="doReport"><block s="reportNewList"><list><\/list><\/block><\/block><\/script><\/block><block s="doIfElse"><block s="evaluate"><block var="pred"\/><list><block s="reportListItem"><l>1<\/l><block var="data"\/><\/block><\/list><\/block><script><block s="doReport"><block s="reportCONS"><block s="reportListItem"><l>1<\/l><block var="data"\/><\/block><custom-block s="keep items such that %predRing from %l"><block var="pred"\/><block s="reportCDR"><block var="data"\/><\/block><\/custom-block><\/block><\/block><\/script><script><block s="doReport"><custom-block s="keep items such that %predRing from %l"><block var="pred"\/><block s="reportCDR"><block var="data"\/><\/block><\/custom-block><\/block><\/script><\/block><\/script><\/block><\/script><\/block-definition><block-definition s="combine with %&apos;function&apos; items of %&apos;data&apos;" type="reporter" category="lists"><inputs><input type="%repRing"><\/input><input type="%l"><\/input><\/inputs><script><block s="doWarp"><script><block s="doIf"><custom-block s="empty? %l"><block s="reportCDR"><block var="data"\/><\/block><\/custom-block><script><block s="doReport"><block s="reportListItem"><l>1<\/l><block var="data"\/><\/block><\/block><\/script><\/block><block s="doReport"><block s="evaluate"><block var="function"\/><list><block s="reportListItem"><l>1<\/l><block var="data"\/><\/block><custom-block s="combine with %repRing items of %l"><block var="function"\/><block s="reportCDR"><block var="data"\/><\/block><\/custom-block><\/list><\/block><\/block><\/script><\/block><\/script><\/block-definition><block-definition s="if %&apos;test&apos; then %&apos;true&apos; else %&apos;false&apos;" type="reporter" category="control"><inputs><input type="%b"><\/input><input type="%anyUE"><\/input><input type="%anyUE"><\/input><\/inputs><script><block s="doIfElse"><block var="test"\/><script><block s="doReport"><block s="evaluate"><block var="true"\/><list><\/list><\/block><\/block><\/script><script><block s="doReport"><block s="evaluate"><block var="false"\/><list><\/list><\/block><\/block><\/script><\/block><\/script><\/block-definition><block-definition s="for %&apos;i&apos; = %&apos;start&apos; to %&apos;end&apos; %&apos;action&apos;" type="command" category="control"><inputs><input type="%upvar"><\/input><input type="%n">1<\/input><input type="%n">10<\/input><input type="%cs"><\/input><\/inputs><script><block s="doDeclareVariables"><list><l>step<\/l><l>tester<\/l><\/list><\/block><block s="doIfElse"><block s="reportGreaterThan"><block var="start"\/><block var="end"\/><\/block><script><block s="doSetVar"><l>step<\/l><l>-1<\/l><\/block><block s="doSetVar"><l>tester<\/l><block s="reifyReporter"><autolambda><block s="reportLessThan"><block var="i"\/><block var="end"\/><\/block><\/autolambda><list><\/list><\/block><\/block><\/script><script><block s="doSetVar"><l>step<\/l><l>1<\/l><\/block><block s="doSetVar"><l>tester<\/l><block s="reifyReporter"><autolambda><block s="reportGreaterThan"><block var="i"\/><block var="end"\/><\/block><\/autolambda><list><\/list><\/block><\/block><\/script><\/block><block s="doSetVar"><l>i<\/l><block var="start"\/><\/block><block s="doUntil"><block s="evaluate"><block var="tester"\/><list><\/list><\/block><script><block s="doRun"><block var="action"\/><list><\/list><\/block><block s="doChangeVar"><l>i<\/l><block var="step"\/><\/block><\/script><\/block><\/script><\/block-definition><block-definition s="join words %&apos;words&apos;" type="reporter" category="operators"><inputs><input type="%mult%txt"><\/input><\/inputs><script><block s="doWarp"><script><block s="doIf"><custom-block s="empty? %l"><block s="reportCDR"><block var="words"\/><\/block><\/custom-block><script><block s="doReport"><block s="reportListItem"><l>1<\/l><block var="words"\/><\/block><\/block><\/script><\/block><block s="doReport"><block s="reportJoinWords"><list><block s="reportListItem"><l>1<\/l><block var="words"\/><\/block><block s="reportJoinWords"><list><l> <\/l><block s="evaluate"><block s="reifyReporter"><autolambda><custom-block s="join words %mult%txt"><block s="reportCDR"><block var="words"\/><\/block><\/custom-block><\/autolambda><list><\/list><\/block><list><\/list><\/block><\/list><\/block><\/list><\/block><\/block><\/script><\/block><\/script><\/block-definition><block-definition s="list-&gt;sentence %&apos;data&apos;" type="reporter" category="operators"><inputs><input type="%l"><\/input><\/inputs><script><block s="doWarp"><script><block s="doReport"><custom-block s="combine with %repRing items of %l"><block s="reifyReporter"><autolambda><custom-block s="join words %mult%txt"><list><l><\/l><l><\/l><\/list><\/custom-block><\/autolambda><list><\/list><\/block><block var="data"\/><\/custom-block><\/block><\/script><\/block><\/script><\/block-definition><block-definition s="sentence-&gt;list %&apos;text&apos;" type="reporter" category="operators"><inputs><input type="%txt"><\/input><\/inputs><script><block s="doWarp"><script><block s="doDeclareVariables"><list><l>result<\/l><l>thisword<\/l><l>emptyword<\/l><\/list><\/block><block s="doSetVar"><l>result<\/l><block s="reportNewList"><list><\/list><\/block><\/block><block s="doSetVar"><l>thisword<\/l><l><\/l><\/block><block s="doSetVar"><l>emptyword<\/l><l><\/l><\/block><custom-block s="for %upvar = %n to %n %cs"><l>i<\/l><l>1<\/l><block s="reportStringSize"><block var="text"\/><\/block><script><block s="doIfElse"><block s="reportEquals"><block s="reportLetter"><block var="i"\/><block var="text"\/><\/block><l> <\/l><\/block><script><block s="doIf"><block s="reportNot"><block s="reportEquals"><block var="thisword"\/><block var="emptyword"\/><\/block><\/block><script><block s="doAddToList"><block var="thisword"\/><block var="result"\/><\/block><block s="doSetVar"><l>thisword<\/l><block var="emptyword"\/><\/block><\/script><\/block><\/script><script><block s="doSetVar"><l>thisword<\/l><block s="reportJoinWords"><list><block var="thisword"\/><block s="reportLetter"><block var="i"\/><block var="text"\/><\/block><\/list><\/block><\/block><\/script><\/block><\/script><\/custom-block><block s="doIf"><block s="reportNot"><block s="reportEquals"><block var="thisword"\/><block var="emptyword"\/><\/block><\/block><script><block s="doAddToList"><block var="thisword"\/><block var="result"\/><\/block><\/script><\/block><block s="doReport"><block var="result"\/><\/block><\/script><\/block><\/script><\/block-definition><block-definition s="catch %&apos;tag&apos; %&apos;action&apos;" type="command" category="control"><inputs><input type="%upvar"><\/input><input type="%cs"><\/input><\/inputs><script><block s="doCallCC"><block s="reifyScript"><script><block s="doSetVar"><l>tag<\/l><block var="cont"\/><\/block><block s="doRun"><block var="action"\/><list><\/list><\/block><\/script><list><l>cont<\/l><\/list><\/block><\/block><\/script><\/block-definition><block-definition s="throw %&apos;cont&apos;" type="command" category="control"><inputs><input type="%s">catchtag<\/input><\/inputs><script><block s="doRun"><block var="cont"\/><list><\/list><\/block><\/script><\/block-definition><block-definition s="catch %&apos;tag&apos; %&apos;value&apos;" type="reporter" category="control"><inputs><input type="%upvar"><\/input><input type="%anyUE"><\/input><\/inputs><script><block s="doCallCC"><block s="reifyScript"><script><block s="doSetVar"><l>tag<\/l><block var="cont"\/><\/block><block s="doReport"><block s="evaluate"><block var="value"\/><list><\/list><\/block><\/block><\/script><list><l>cont<\/l><\/list><\/block><\/block><\/script><\/block-definition><block-definition s="throw %&apos;tag&apos; %&apos;value&apos;" type="command" category="control"><inputs><input type="%s">catchtag<\/input><input type="%s"><\/input><\/inputs><script><block s="doRun"><block var="tag"\/><list><block var="value"\/><\/list><\/block><\/script><\/block-definition><block-definition s="for each %&apos;item&apos; of %&apos;data&apos; %&apos;action&apos;" type="command" category="lists"><inputs><input type="%upvar"><\/input><input type="%l"><\/input><input type="%cs"><\/input><\/inputs><script><block s="doUntil"><custom-block s="empty? %l"><block var="data"\/><\/custom-block><script><block s="doSetVar"><l>item<\/l><block s="reportListItem"><l>1<\/l><block var="data"\/><\/block><\/block><block s="doRun"><block var="action"\/><list><block s="reportListItem"><l>1<\/l><block var="data"\/><\/block><\/list><\/block><block s="doSetVar"><l>data<\/l><block s="reportCDR"><block var="data"\/><\/block><\/block><\/script><\/block><\/script><\/block-definition><\/blocks>', null, true);